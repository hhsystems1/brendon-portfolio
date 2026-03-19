from __future__ import annotations

from pathlib import Path

from PIL import Image


def main() -> None:
    src = Path.home() / ".openclaw/media/inbound/file_49---df9dbb5f-8591-40ab-b6e2-15d2f9ad2764.jpg"
    out_png = Path("public/turtle-emoji.png")
    out_webp = Path("public/turtle-emoji.webp")

    im = Image.open(src).convert("RGBA")
    px = im.load()

    # Remove dark background by making near-black pixels transparent.
    # Conservative thresholds to preserve shadows.
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            # perceived brightness
            br = 0.2126 * r + 0.7152 * g + 0.0722 * b
            if br < 22:
                px[x, y] = (r, g, b, 0)

    # Tight crop to non-transparent
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)

    # Add padding around subject
    pad = 48
    canvas = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    canvas.paste(im, (pad, pad))

    # Resize to a sane size
    max_dim = 512
    scale = min(max_dim / canvas.width, max_dim / canvas.height, 1.0)
    if scale < 1.0:
        canvas = canvas.resize((int(canvas.width * scale), int(canvas.height * scale)), Image.Resampling.LANCZOS)

    out_png.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out_png, "PNG", optimize=True)
    canvas.save(out_webp, "WEBP", quality=92, method=6)

    print(f"Wrote: {out_png} ({out_png.stat().st_size} bytes)")
    print(f"Wrote: {out_webp} ({out_webp.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
