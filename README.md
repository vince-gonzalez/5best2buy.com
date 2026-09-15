# 5best2buy — the build chain and the corpus

This branch is not a website. It is the machinery that produces one, kept
here because it used to live only in `C:\tmp`, which gets cleaned.

**It is never served.** GitHub Pages publishes `main` at `/`, and everything
at the root of `main` is publicly downloadable — `build-all.js` and
`generate-aisles.js` already are. The corpus in `data/` is the site's whole
moat: 1,433 recipes and 572 shelves of maker research in clean machine-
readable form. On `main` it would be one `curl` away for anybody. On this
branch it is versioned, backed up, and unpublished.

## What is here

    chain/     35 scripts — the 30 build stages, plus build-all, mascots,
               resolver, gate-amazon and search-aliases
    data/
      recipe-batches/      106 files — every recipe
      shelf-content/        84 files — every shelf and maker
      cut-content/          12 files — the butcher cuts
      5b2b-extension/       index.json, 446 KB. resolver.js and
                            inject-cut-links.js read it with no existsSync
                            guard, so without it stages 22 and 25 crash.

## Restoring it

The scripts resolve their paths from their own location, so the workspace can
go anywhere as long as the chain and the corpus stay together. Put both in one
directory, with the site checked out beside them as `5b2b-live`:

```bash
git clone https://github.com/vince-gonzalez/5best2buy.com.git <work>/5b2b-live
cd <work>/5b2b-live
git worktree add <work>/_restore build
cp -r <work>/_restore/chain/*  <work>/
cp -r <work>/_restore/data/*   <work>/
git worktree remove <work>/_restore
```

`<work>` is yours to pick; it has been the temp folder. To write the site
somewhere other than `<work>/5b2b-live`, set `SITE_ROOT`:

```bash
SITE_ROOT=D:/sites/5best2buy node build-all.js
```

Each script works out two things for itself. `__site` is the site being
written: this directory when the script sits inside it, otherwise the
`5b2b-live` beside the workspace. `__work` is the folder holding the chain and
the corpus, found by looking for `recipe-batches`. `SITE_ROOT` beats both.


## Running it

```bash
node <work>/5b2b-live/build-all.js
node <work>/gate-amazon.js <work>/5b2b-live
```

Run it from wherever the chain lives; the working directory no longer
matters, because `build-all.js` resolves each stage against its own
location. A stage it cannot find is now fatal rather than skipped — it used
to print `ABSENT — skipped`, build a partial site and exit 0. The tail
should still read `ran 30, skipped 0`.

## Keeping it current

The reason this branch exists is that the previous backup went stale without
saying so. `OneDrive\Desktop\tmp-tooling-archive` looked like a safety net
for weeks while `generate-recipes.js` drifted 1,751 bytes from the copy that
actually ran. Restoring from it would have rebuilt the site wrong, quietly.

So after any change to a generator or to the corpus, push it here:

```bash
cd C:/tmp/5b2b-live
git worktree add C:/tmp/_build-wt build
cp C:/tmp/*.js                   C:/tmp/_build-wt/chain/
cp -r C:/tmp/recipe-batches/*    C:/tmp/_build-wt/data/recipe-batches/
cp -r C:/tmp/shelf-content/*     C:/tmp/_build-wt/data/shelf-content/
cp -r C:/tmp/cut-content/*       C:/tmp/_build-wt/data/cut-content/
cd C:/tmp/_build-wt && git add -A && git commit -m "refresh" && git push
cd C:/tmp/5b2b-live && git worktree remove C:/tmp/_build-wt
```

To find out whether it has drifted, compare hashes rather than dates — a
file can be touched without changing and changed without being touched.

## Checking a build

    pages 2549 · sitemap 2551 · adsense 475 · awin 2
    recipes 1442 · shelves 572 · amazon 5195 links / 0 bad

A full run is about 40 seconds. The homepage legitimately changes a few
bytes every run — it rotates the weekly shelf and the Maker of the Week
with no cron — so a small diff there is the feature, not an injection.

## One thing still worth fixing

Six generators exist in both the workspace and on `main`. They now resolve to
the same site and the same corpus from either place, so running the wrong one
is no longer wrong — but nothing keeps their contents in step, and a fix
applied to one copy still leaves the other behind. It cost two passes on
`generate-data-tables.js` on 2026-09-15.
