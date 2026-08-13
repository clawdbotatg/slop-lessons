#!/bin/bash
# deploy ask-clawd to the relay box (run from repo root): agent code + corpus
set -e
BOX=zkllmapi
ssh $BOX 'mkdir -p ~/ask-clawd/corpus/notes ~/ask-clawd/.claude'
rsync -az agent/server.py agent/CLAUDE.md $BOX:~/ask-clawd/
rsync -az agent/.claude/settings.json $BOX:~/ask-clawd/.claude/
rsync -az TALK.md data/digest.md data/glossary.json $BOX:~/ask-clawd/corpus/
rsync -az notes/ $BOX:~/ask-clawd/corpus/notes/
rsync -az agent/ask-clawd.service $BOX:/tmp/ask-clawd.service
ssh $BOX 'sudo mv /tmp/ask-clawd.service /etc/systemd/system/ && sudo systemctl daemon-reload && sudo systemctl enable --now ask-clawd && sudo systemctl restart ask-clawd'
echo "deployed. secret lives only in $BOX:~/ask-clawd/.env"
