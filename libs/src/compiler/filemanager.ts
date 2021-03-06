import rimraf from "rimraf";
import * as fs from "fs";
import * as path from "path";
import log from "./log";
import core from "./core";

class filemanager {
    static path = path;
    static join = path.join;

    /**
     * Is file/folder exists?
     */
    static exist(filepath: string) {
        return fs.existsSync(filepath);
    }

    /**
     * Delete file or directory recursive
     * @param filedir
     * @param async
     * @returns null = file/dir not exists, false = delete filedir failed, true = success
     */
    static unlink(filedir: string, async?: boolean) {
        const deleteNow = function () {
            if (fs.existsSync(filedir)) {
                if (async) {
                    rimraf(filedir, function (err) {
                        if (!err) {
                            log.log(log.success("done"));
                        } else {
                            log.log(log.error(`cannot delete ${core.filelog(filedir)}`));
                        }
                    });
                } else {
                    rimraf.sync(filedir);
                }
                return true;
            } else {
                return false;
            }
        };
        try {
            const exists = fs.existsSync(filedir);
            if (exists) {
                return deleteNow();
            } else {
                return null;
            }
        } catch (error) {
            return false;
        }
    }

    /**
     * create file recursive
     * @param file
     * @param content
     */
    static mkfile(file: string, content: any) {
        this.mkdir(path.dirname(file));
        if (typeof content == "object" || Array.isArray(content)) {
            content = JSON.stringify(content, null, 4);
        }
        fs.writeFileSync(file, content, { encoding: "utf-8" });
        return file;
    }

    /**
     * create directory recursive
     * @param dir
     */
    static mkdir(dir: string) {
        if (!fs.existsSync(path.dirname(dir))) {
            this.mkdir(path.dirname(dir));
        }
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        return dir;
    }

    /**
     * remove all files/folders except matches regex
     * @param folder
     * @param exclude
     */
    static empty(folder: string, exclude: RegExp | null) {
        fs.readdir(folder, (err, files) => {
            if (err) {
                log.log(log.error(err.message));
            } else {
                files.forEach((file) => {
                    const fileDir = path.join(folder, file);

                    if (exclude) {
                        if (!exclude.test(file)) {
                            filemanager.unlink(fileDir, true);
                        } else {
                            log.log(log.error(`${fileDir} in excluded lists`));
                        }
                    } else {
                        filemanager.unlink(fileDir, true);
                    }
                });
            }
        });
    }

    /**
     * @param dir
     * @param fileLists
     * @param exclude
     * @return
     */
    static readdir(dir: string, fileLists: string[] = null, exclude: Array<string | RegExp> = null): Array<any> {
        if (!dir) return null;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        if (!dir.toString().endsWith("/")) {
            dir += "/";
        }
        const files = fs.readdirSync(dir);
        fileLists = fileLists || [];
        files.forEach(function (file) {
            if (fs.statSync(dir + file).isDirectory()) {
                fileLists = self.readdir(dir + file + "/", fileLists, exclude);
            } else {
                fileLists.push(path.resolve(dir + file));
            }
        });
        if (exclude && exclude.length) {
            exclude.forEach(function (ex) {
                fileLists = fileLists.filter(function (item) {
                    let allow = null;
                    if (ex instanceof RegExp) {
                        allow = !ex.test(item);
                    } else {
                        const matches = item.indexOf(ex) !== -1;
                        allow = !matches;
                    }
                    //console.log(allow, ex);
                    return allow;
                });
            });
        }

        return fileLists;
    }

    static normalize() {}
}

export = filemanager;
