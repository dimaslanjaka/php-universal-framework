#!/bin/bash

#------------------------------------------------------------------------------
#                            Google IP Ranges Updater
#------------------------------------------------------------------------------
#
# Description:  This script will automatically pull all Google IP ranges \
#               and saves into the file. This script is for Nginx \
#               and requires HttpRealipModule.
#
# Author:       Syed I.R
#               <syed AT lukonet.com>
#               <https://github.com/irazasyed>
#
# Version:      1.0.0 25-Mar-2014
#
# Project URL:  https://github.com/irazasyed/nginx-google-ip-range-updater
#
#------------------------------------------------------------------------------
#                            The MIT License (MIT)
#------------------------------------------------------------------------------
#
# Copyright (c) 2014 Syed I.R
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

# MODDED BY DIMAS LANJAKA 27/05/2020

GOOGLE_IP_RANGES_FILE_PATH="conf/google_ips.conf"
GOOGLE_TEMP_FILE="tmp/google-ips"
GOOGLE_IPS_TXT="conf/google_ips.txt"
WWW_GROUP="root"
WWW_USER="root"

echo "# Google IP Ranges" >$GOOGLE_IP_RANGES_FILE_PATH
echo "# Generated at $(date) by $0" >>$GOOGLE_IP_RANGES_FILE_PATH
echo "" >>$GOOGLE_IP_RANGES_FILE_PATH

subdomains="_netblocks _netblocks2 _netblocks3 cache fonts get optimize ns ns1 ns2 ns3 ns4 www pagespeeed analystics"
for subdomain in $subdomains; do
  response=$(nslookup -q=TXT $subdomain.google.com 8.8.8.8)
  echo "$response" | egrep -o '\<ip[46]:[^ ]+' | cut -c 5- >>$GOOGLE_TEMP_FILE
done
cp $GOOGLE_TEMP_FILE $GOOGLE_IPS_TXT

cat google.txt | while read line || [[ -n $line ]]; do
  # do something with $line here
  response=$(nslookup -q=TXT $line 8.8.8.8)
  echo "$response" | egrep -o '\<ip[46]:[^ ]+' | cut -c 5- >>$GOOGLE_TEMP_FILE
done

sort -u $GOOGLE_TEMP_FILE
cp $GOOGLE_TEMP_FILE $GOOGLE_IPS_TXT

awk '{ print "set_real_ip_from " $0 ";" }' $GOOGLE_TEMP_FILE >>$GOOGLE_IP_RANGES_FILE_PATH

echo "real_ip_header X-Forwarded-For;" >>$GOOGLE_IP_RANGES_FILE_PATH
echo "" >>$GOOGLE_IP_RANGES_FILE_PATH

rm -rf $GOOGLE_TEMP_FILE
