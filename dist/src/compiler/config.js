"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = { "database": { "user": "root", "pass": "", "dbname": "darkit", "host": "localhost", "port": 3306 }, "google": { "key": "AIzaSyDgRnuOT2hP-KUOeQhGoLfOOPHCNYhznFI", "secret": "hr0fWpSvBv3gkR3eMD93j6qS", "client": "974269993480-30i5epi0r6a9uiafq3rkpgsjuooe2t3q.apps.googleusercontent.com", "recaptcha": { "key": "6LdSg5gUAAAAAKrfCL7OkHCFrS3m09xoWyvFKieF", "secret": "6LdSg5gUAAAAAL7aiyHjXKArlkF0R7HAlA99oMYG" }, "analystics": { "id": "UA-106238155-1" } }, "cache": { "enable": false, "ext": "5a1978ece18d9cabcc95d164f606e40b", "key": "API", "timeout": 60 }, "htaccess": { "cache": true }, "vscode": { "tasks": [] }, "app": { "views": "views", "root": "D:\\Workspaces\\PHP\\universal-framework", "domain": "localhost", "port": 80, "protocol": "http", "environtment": "development", "theme": { "default": "default", "mdb-dashboard": ["telkomsel", "coupon", "im3", "superuser"], "apotek-branch": ["warehouses"] }, "shutdown": ["coupon"], "group": { "blog.php.io": { "index": "etc/blog/index" } } }, "security": { "salt": "dimaslanjaka" }, "session": { "folder": "src/Session/sessions" }, "ngrok": { "url": "https://a001b9cf598b.ngrok.io" }, "root": "", "$schema": "./config-schema.json" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGlicy9zcmMvY29tcGlsZXIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsTUFBTSxHQUFHLEVBQUMsVUFBVSxFQUFDLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsSUFBSSxFQUFDLEVBQUMsUUFBUSxFQUFDLEVBQUMsS0FBSyxFQUFDLHlDQUF5QyxFQUFDLFFBQVEsRUFBQywwQkFBMEIsRUFBQyxRQUFRLEVBQUMsMEVBQTBFLEVBQUMsV0FBVyxFQUFDLEVBQUMsS0FBSyxFQUFDLDBDQUEwQyxFQUFDLFFBQVEsRUFBQywwQ0FBMEMsRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxFQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsa0NBQWtDLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsT0FBTyxFQUFDLElBQUksRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQywwQ0FBMEMsRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLE9BQU8sRUFBQyxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsZUFBZSxFQUFDLENBQUMsV0FBVyxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsV0FBVyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsWUFBWSxDQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBQyxhQUFhLEVBQUMsRUFBQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsTUFBTSxFQUFDLGNBQWMsRUFBQyxFQUFDLFNBQVMsRUFBQyxFQUFDLFFBQVEsRUFBQyxzQkFBc0IsRUFBQyxFQUFDLE9BQU8sRUFBQyxFQUFDLEtBQUssRUFBQywrQkFBK0IsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUMsU0FBUyxFQUFDLHNCQUFzQixFQUFDLENBQUEifQ==