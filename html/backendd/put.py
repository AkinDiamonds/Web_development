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
    
    def do_PUT(self):
        content_size = int(self.headers.get("Content-Length", 0))
        raw_data = self.rfile.read(content_size)

        parsed_data = json.loads(raw_data)
        data.append(parsed_data) # saving to a database

        # this should update the data if it exists
        # otherwise it should create a new entry
        for index, item in enumerate(data):
            if item["name"] == parsed_data["name"]:
                data[index] = parsed_data
                break
        else:
            data.append(parsed_data)
            
        self.send_data({
            "message": "Data added successfully",
            "data": parsed_data
        })

def run():
    HTTPServer(('localhost', 5000), BasicAPI).serve_forever()

print("Application is running ")
run()