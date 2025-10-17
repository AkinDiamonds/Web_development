from http.server import BaseHTTPRequestHandler, HTTPServer
import json

data = [
    {
    "name": "Sam Larry",
    "track": "AI Developer"
    }
]

class BasicAPI(BaseHTTPRequestHandler):
    def send_data(self, payload, status = 201):
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.end_headers()
        self.wfile.write(json.dumps(payload).encode())
    
    def do_DELETE(self):
        content_size = int(self.headers.get("Content-Length", 0))
        raw_data = self.rfile.read(content_size)

        parsed_data = json.loads(raw_data)
        name_to_delete = parsed_data.get("name")

        for index, item in enumerate(data):
            if item["name"] == name_to_delete:
                deleted_item = data.pop(index)
                self.send_data({
                    "message": "Data deleted successfully",
                    "data": deleted_item
                })
                break
        else:
            self.send_data({
                "message": "Item not found"
            }, status=404)

print("Application is running ")
def run():
    HTTPServer(('localhost', 5000), BasicAPI).serve_forever()