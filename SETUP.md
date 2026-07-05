# Manual Setup Checklist

Everything in this repo is built and tested locally. These are the steps only you can do,
because they require your GitHub credentials and DNS access.

## 1. Confirm the account

`github.com/redfearn-group` already exists (created today, empty). Confirm that's actually
yours before continuing.

## 2. Push this repo to the new account

From `C:\Claude Code\redfearn-group.github.io`:

```
git init
git add .
git commit -m "Initial site: home, work library, insights, about, contact"
```

Create the repo on GitHub first (via the web UI is easiest): go to
`github.com/new` while logged into `redfearn-group`, name it exactly
`redfearn-group.github.io`, public, do not initialize with a README (this repo already has one
implicitly through its content).

Then connect and push. If you're not already authenticated as `redfearn-group` in this
environment (`gh auth login` or a fresh SSH key tied to that account), do that first, git won't
let you push as the wrong identity.

```
git remote add origin https://github.com/redfearn-group/redfearn-group.github.io.git
git branch -M main
git push -u origin main
```

## 3. Turn on GitHub Pages via Actions

In the new repo: **Settings > Pages > Build and deployment > Source**, select **GitHub
Actions**. The workflow at `.github/workflows/deploy.yml` handles the rest automatically on
every push to `main`.

## 4. Point the custom domain at the new repo

Still in **Settings > Pages**: add `redfearn.group` under **Custom domain**. GitHub will likely
ask for a domain verification TXT record since this is a different account than the one that
currently serves the domain. Add that TXT record at your DNS registrar, then confirm in GitHub.

Your existing A/ALIAS records pointing `redfearn.group` at GitHub Pages IPs should not need to
change, GitHub Pages IPs are the same regardless of which account/repo serves the domain.

## 5. Retire the old site

Once `redfearn.group` is confirmed serving from the new repo:

- Go to `redfearnb/redfearn-group-site` on your personal account, **Settings > Pages**, and
  remove the custom domain there (a domain can only be actively assigned to one repo at a time).
- Archive `redfearn-group-site` and the six old case-study repos (`ai-strategy-hub`,
  `leadership-impact-dashboard`, `product-prioritization-framework`,
  `cultural-transformation-case-study`, `ux-research-tools`, `cyber-resilience-hub`) via
  **Settings > Archive this repository**. Archiving keeps the history without them cluttering
  your personal account or staying live as duplicate/conflicting content.

## 6. Verify

Visit `https://redfearn.group` and click through Work, Insights, About, and Contact. Check the
RSS feed at `/insights/feed.xml`. Share a link on LinkedIn/Slack to yourself to confirm the OG
card renders.

## 7. Ongoing content

Two things still needed for full depth on the case study library:

- The career brain-dump (role-by-role: scale, dates, what you built, numbers, hardest problem)
  for each chapter since 2009, to replace the `<!-- TODO -->` markers in `src/case-studies/*.md`.
- The full LinkedIn export ("The Works," not the Basic one) once it lands, for additional proof
  points and voice.

Use the `redfearn-blog` skill (installed at `~/.claude/skills/redfearn-blog/`) going forward for
weekly Insights posts, just ask to write one and it handles drafting, review, and the LinkedIn
cross-post text.
