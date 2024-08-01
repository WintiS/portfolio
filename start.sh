#!/bin/bash

# Start the server
bun run /app/client/server/entry.bun.js &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
