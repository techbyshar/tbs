# Tech by Shar website

A static Tech by Shar homepage with ABCR, SAFE-R, and a Kinora family digital safety early preview. The official Tech by Shar logo and portrait are included. Kinora is hosted in the `kinora/` folder, so its homepage card works immediately when the full folder is published.

## Preview locally

From this folder, run `python3 -m http.server 8000` and visit `http://localhost:8000/`. Open `http://localhost:8000/kinora/` to preview Kinora directly.

## Publish with GitHub Pages

1. Upload **all** files and folders in this ZIP to the root of the Tech by Shar GitHub Pages repository. Keep `kinora/` at the root alongside `index.html`.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**, `main`, `/root`.
3. When deployment finishes, the homepage will be available at the repository's configured domain and Kinora at `/kinora/` on that domain.

The paths are relative, so the bundle also works in a GitHub project repository. Uploading these files replaces the current homepage when deployed. The external ABCR, SAFE-R, LinkedIn, YouTube, and publication links remain external.

Kinora's Kriol text is a draft. Please have a Raizal language expert review it before a formal public launch. See `kinora/README.md` for the full Kinora details.
