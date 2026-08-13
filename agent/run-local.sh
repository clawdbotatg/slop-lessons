#!/bin/bash
# run ask-clawd on this machine (manual, foreground, ctrl-c to stop).
# the site's Q&A window tries localhost:8899 first — start this before presenting
# if you want live answers; skip it and the widget just says clawd is offline.
cd "$(dirname "$0")"
export PATH="$HOME/.local/bin:$PATH"
exec python3 server.py
