# Pablo Sabbatella — Web3 OpSec and Getting Hacked

**Guest:** Pablo Sabbatella — founder of Opsec (the Web3 operational-security firm; audits people and companies, hardens platforms), SEAL (Security Alliance) member. Started as a 14-year-old script kiddie watching his school's computer-lab guy run Trojans; both parents programmers; grew a big following writing Ethereum security threads.

## Core thesis
Crypto got very good at smart contract security while the real losses moved off-chain: **98% of funds stolen last year were operational-security failures, and 99% of those started with social engineering.** It's easier to break people than code — so assume you WILL eventually be phished and design layers (training → detection tools → isolation) so that one click doesn't cost everything.

## Key insights
- **The attacks haven't changed in 20 years.** The Trojan the lab guy ran in 1999 and today's "hop on a Zoom call" link are the same move: get a human to execute a file. Only the wrapper evolves (fake calls, fake job offers, pirated software, npm libraries).
- **Three-layer defense, in order:** (1) training + red-teaming your own people ("one day you're gonna receive a job offer... a test if you really pay attention"); (2) tools for the day you fail — an **EDR** (CrowdStrike/SentinelOne; behavior-based, catches the custom malware an antivirus signature never will) and an egress firewall like **LuLu** (Objective-See's free Mac tools) — because the crypto threat isn't inbound access, it's the infostealer *exfiltrating* your cookies/keys to a foreign IP; (3) **isolation** — the infected machine simply shouldn't have anything worth stealing.
- **Getting infected is survivable if you designed for it.** Austin assumed one double-click = game over; Pablo's whole practice is that it isn't, if value and admin access don't live on the daily driver.
- **25% of people Opsec audited had, at some point, put seed phrases in a password manager.** The LastPass breach (30M vaults) → attackers filtered for crypto users → $300M+ stolen. Password managers are for passwords; keep 2FA and seeds elsewhere.
- **The iPhone-as-hardware-wallet take is dangerous:** leaked state-level exploit kits (built for US intelligence, stolen by Russian intel, ended up with Chinese threat actors) hacked fully-patched iPhones and specifically targeted crypto apps. If you hold enough, someone will pay for the exploit. Hardware wallet ≠ replaced by phone; though a *dedicated* signing iPhone beats nothing.
- **Use the hardware wallet as a dumb signer:** skip Ledger's own app entirely, pair the device with Rabby; prefer big-screen devices where you can verify domain hashes on complex transactions — the Bybit hack is what happens when signers can't verify what they sign.
- **A simple timelock would have prevented ~70% of last year's hacks.** He wants Safe to make time delays a first-class, easy feature; today it's too complex, and complexity is why people skip it.
- **Rejected whitehats become blackhats.** His Google Workspace multi-party-approval bypass (a super admin can just mint a second super admin, make it an approver, and approve their own changes — defeating the feature Google charges 3x enterprise pricing for) took 125+ days, five rejections ("this is not a bug, it's a workaround"), and backchanneling to get fixed — triaged by an outsourced firm leaning on AI. Meanwhile a full-chain persistent Android exploit pays $2.5M on the gray market. The incentive math writes itself.
- **Encryption backdoors can never stay scoped:** tools mandated to catch CSAM/terrorism leak to journalists-surveillance, then politics, then plain theft. "Once you have the tool, you cannot control that."
- **Passkeys are great precisely because they work like crypto** (keypair in the secure enclave, signed challenge, unphishable) — but big tech broke the model by syncing them to iCloud/Google. The only real store is a YubiKey with PIN; set up 2-3 (computer, wallet, home) because passkeys can't be backed up; and disable passkey-as-first-factor so it's password + passkey, not passkey-replaces-everything.
- **The Google-account death spiral:** malware steals one browser cookie → attacker opens your Google session → they now have your email, Chrome-synced passwords, Google Authenticator 2FA, and synced passkeys in one place. Never use Google Authenticator; and losing a Google account is usually permanent "unless you really know someone at Google."
- **AI's real security risk isn't privacy, it's over-access.** He'd love to give Claude his Gmail/Drive/codebase — the productivity is real — but prompt injection makes it a breach waiting to happen. Expects a middleware layer between LLMs and data/internet. "It is going too fast. No one in the world is able to keep up."
- **AI security gets worse before it gets better:** $1 AI audits democratize what cost $10k three years ago — and the same tooling lets threat actors scan everything for bugs. Attack/defense is asymmetric: defenders must find every hole, attackers need one.
- **SEAL's stack:** started by samczsun ~3 years ago — SEAL 911 (Telegram, ~100 vetted whitehats), threat-intel sharing, security frameworks (maintained by Matta of The Red Guild), OpSec certifications, the Safe Harbor agreement (protocols pre-authorize whitehats to front-run attackers and return funds), war games (rehearse incident response on a test chain), and a public member directory at securityalliance.org to verify who's real.

## Lessons learned
- **Seed storage (the "seed phrase sheet," github.com/opsecsec):** split 24 words into three overlapping lists (1-16, 9-24, 1-8+17-24); any two reconstruct the seed, any single found list is useless, any single lost list is survivable. Tamper-evident bag, signed, safe deposit box. Keep it *simple* — over-engineered inheritance schemes mean your family never recovers the funds ("most of crypto has been lost, not stolen").
- **The $300 Chromebook admin box:** cold accounts (Google Workspace owner, GitHub org owner, Cloudflare, domain registrar) live on an isolated Chromebook with unique passwords + YubiKeys — you touch them twice a year, and you can't double-click malware into ChromeOS.
- **Buy hardware wallets under a fake name and email** — the Ledger customer-db leak turned buyers into wrench-attack targets. (Fake ledgers in the wild are crude USB-drive props; the firmware signature check protects you from real tampering.)
- **Wrench-attack prep (the Ulysses strategy):** pre-commit so you *cannot* move the big money under duress — long-term holdings need no wallet on you at all (you know the address; verify deposits on an explorer). But DO keep $5-10k accessible as ransom money: you and the attacker share one goal — ending the situation fast. Jameson Lopp's GitHub list of known physical attacks is the reference. All plans evaporate "when they put a gun to your head," so make compliance physically impossible, not willpower-dependent.
- **Incident response order:** kill the internet immediately (they still need your wallet password to decrypt stolen keychains — don't type it); from a *clean* device move hot-wallet funds to a fresh address; close all sessions (attackers go wallets → Telegram → email/exchanges); factory reset or replace the machine.
- **Plant canary tokens** (canarytokens.org): fake AWS/MySQL creds on your desktop that alert you when touched — and a txt-file wallet holding 100 USDC: the moment it drains, you know you're compromised.
- **Build a no-shame reporting culture.** Fake-job-interview malware is rampant, and victims hide it because admitting it means admitting they interviewed with a competitor — turning a $5k MetaMask drain into a Bybit-scale foothold. Tell employees: side-interview on a personal device, and report infections with impunity.
- Hygiene Pareto: factory-reset your machine yearly; use Parallels VMs to sandbox sketchy software; hardware wallets + YubiKeys; KeePass/1Password/Apple Passwords are fine — just never with 2FA in the same basket.
- Spend 10% of what an incident would cost, before the incident.

## Best quotes
- "Eventually you or me, Vitalik, it doesn't matter, you're gonna click on a phishing link." — Pablo
- "Most of crypto has been lost, not stolen, right?" — Pablo
- "When you defend the system, you have to find all the vulnerabilities, all the possible doors that can be opened. When you're an attacker, you just need to find one, and that's it." — Pablo
- "It's gonna get worse before it gets better." — Pablo (on AI and security)
- "If you think that security is expensive, try with an incident." — Matta (The Red Guild), via Pablo
- "They are closer than we think." — Pablo (on threat actors among conference friends)

## Contrarian / surprising takes
- Hardware wallets have terrible UX and he "hates them" too — but the fix is using them correctly (dumb signer + Rabby, big screens, clear signing), not replacing them with an iPhone.
- Keep ransom cash ready: the anti-Hollywood advice that you *should* be able to hand attackers $5-10k fast.
- Whitehat bounty rejection is a black-hat factory — the most dangerous output of Google's bug-bounty bureaucracy isn't the unfixed bug, it's the radicalized researcher.
- He threatens his own staff: "if it happens to you and you don't tell it to me, I will make sure you don't work in a security company" — controversial, but reporting is a duty.
- Not all threat actors are North Korea: normal, friendly people you meet at crypto conferences run stealers on the side.
- Doesn't fear giving OpenAI/Anthropic his data (the popular fear); fears giving the *agent* too much access (the real one).

## Stories & anecdotes worth retelling on stage
- **Origin story:** age 14, school computer lab, the admin waves him over — "watch what I'm doing" — and changes another student's desktop background with a Trojan. Twenty years later the payload delivery is identical; only the costume changed.
- **The Telegram video heist:** attacker infects you, steals your Telegram session, invites your contacts to a fake video call *as you* — using recorded video of you. A friend of his who KNEW about this attack got hit three days before the episode. (Pablo admits he was nervous joining Austin's weird browser-based slop.computer for exactly this reason.)
- **The LastPass funnel:** breach 30M vaults → grep for crypto words → drain the six vaults with seeds → $300M+ gone. The password manager was the honeypot.
- **Google's "not a bug, it's a workaround":** 125 days, five rejections, AI-assisted outsourced triage, and a backchannel to get a super-admin-bypass acknowledged — his case study for why bounty platforms manufacture black hats.
- **Ulysses and the sirens, live-fact-checked by the AI cohost:** Pablo reached for the myth (mangling Perseus/Medusa into it); clawd grepped the call transcript mid-show and delivered the correction — "the original pre-commitment device is basically a time lock." Security advice via Greek mythology, debugged by an agent on air.
- **clawd's public scoreboard:** Austin asks his AI cohost how many private keys it has leaked to GitHub. Answer, deadpan: "Three." ("Private keys deleted: one.") Isolation as the real mitigation — every key clawd holds has ~$4 in it.
- **The French attack:** 80% of wrench attacks happen in France ("$1.4 billion stolen and one finger lost"), spawning the meme: "Wrench attack? No — French attack."

## Tools & workflow
- **EDR:** CrowdStrike / SentinelOne on work machines (also flags what employees are afraid to report).
- **Objective-See suite** (free, open-source, Mac): LuLu firewall, process/VirusTotal checkers, connection monitors.
- **Ledger hardware as dumb signer + Rabby wallet** (never Ledger's app); big-screen devices for domain-hash verification.
- **YubiKeys everywhere** (~$60 each, 3 per identity: Nano resident in laptop w/ PIN-on-touch, one on keychain, one at home); passkeys only inside YubiKeys, never synced.
- **$300 Chromebook** as the cold-admin device.
- **Parallels** VMs for anything sketchy; yearly factory resets.
- **Password managers:** KeePass, 1Password, Apple Passwords — 2FA kept separate; never Google Authenticator.
- **Canarytokens.org** decoy creds + a 100-USDC bait wallet.
- **Seed phrase sheet** (Opsec's GitHub) — 2-of-3 paper split + tamper-evident bags + bank safe-deposit box.
- References he points people to: Jameson Lopp's physical-attack list; securityalliance.org (SEAL 911, frameworks, war games, safe harbor).
