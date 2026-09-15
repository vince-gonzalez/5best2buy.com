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

The scripts hardcode absolute paths — `C:/tmp/5b2b-live` for output,
`C:/tmp/recipe-batches` and friends for input. They are copied here
verbatim rather than rewritten, so what is stored is exactly what is known
to work. Restoring means putting them back where they expect to be:

```bash
git clone https://github.com/vince-gonzalez/5best2buy.com.git C:/tmp/5b2b-live
cd C:/tmp/5b2b-live
git worktree add C:/tmp/_restore build
cp -r C:/tmp/_restore/chain/*        C:/tmp/
cp -r C:/tmp/_restore/data/*         C:/tmp/
git worktree remove C:/tmp/_restore
```

The clone target matters: `C:/tmp/5b2b-live` is where every script writes.

## Running it

```bash
cd C:/tmp
node 5b2b-live/build-all.js
node gate-amazon.js C:/tmp/5b2b-live
```

**Run it from `C:\tmp`, not from inside the repo.** `build-all.js` resolves
each stage against the current directory and prints `ABSENT — skipped` for
anything it cannot find, then carries on and exits 0. From the wrong
directory you get a half-built site and no error. The tail must read
`ran 30, skipped 0`.

## Checking a build

    pages 2549 · sitemap 2551 · adsense 475 · awin 2
    recipes 1442 · shelves 572 · amazon 5195 links / 0 bad

A full run is about 40 seconds. The homepage legitimately changes a few
bytes every run — it rotates the weekly shelf and the Maker of the Week
with no cron — so a small diff there is the feature, not an injection.

## Two things still worth fixing

The six scripts duplicated between `C:\tmp` and `main` differ only in line
endings today, but nothing keeps them in step. The copy that runs is the one
in the directory you run from, which is how a fix can appear to do nothing.

The absolute paths are why the restore has a required clone target. Deriving
them from `__dirname` would make the chain runnable from anywhere, at the
cost of touching 31 files that currently work.
