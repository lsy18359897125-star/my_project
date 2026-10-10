"""Start the ACM practice web app with Python's standard library."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse


class AppHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if any(part.startswith('.') for part in self.path.split('?')[0].split('/')):
            self.send_error(403)
            return
        super().do_GET()


def main():
    parser = argparse.ArgumentParser(description='拾码 · Python ACM 练习')
    parser.add_argument('--port', type=int, default=4173)
    args = parser.parse_args()
    root = Path(__file__).resolve().parent
    handler = partial(AppHandler, directory=str(root))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'打开浏览器：http://127.0.0.1:{args.port}', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == '__main__':
    main()
