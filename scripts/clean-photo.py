import sys, random
from PIL import Image, ImageFilter, ImageDraw, ImageChops
src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
W, H = im.size
px = im.load()
YMAX = int(H * 0.385)
mask = Image.new("L", (W, H), 0); mp = mask.load()
keep = Image.new("L", (W, H), 0); kp = keep.load()
for y in range(H):
    for x in range(W):
        r, g, b = px[x, y]
        mn, mx = min(r, g, b), max(r, g, b)
        if y < YMAX and mn > 105 and (mx - mn) < 42:
            mp[x, y] = 255
        if mx < 80:
            kp[x, y] = 255
mask = mask.filter(ImageFilter.MaxFilter(11))
prot = Image.new("L", (W, H), 0)
ImageDraw.Draw(prot).ellipse([int(W*0.415), int(H*0.17), int(W*0.528), int(H*0.40)], fill=255)
mask = ImageChops.subtract(mask, prot)
keep = ImageChops.subtract(keep, mask)
R = 24
num = Image.composite(im, Image.new("RGB", (W, H), 0), keep).filter(ImageFilter.GaussianBlur(R))
den = keep.filter(ImageFilter.GaussianBlur(R))
np_, dp = num.load(), den.load()
fill = Image.new("RGB", (W, H)); fp = fill.load()
random.seed(7)
for y in range(H):
    for x in range(W):
        d = max(dp[x, y], 1) / 255.0
        n = random.gauss(0, 2.0)
        r, g, b = np_[x, y]
        fp[x, y] = (int(min(255, max(0, r / d + n))), int(min(255, max(0, g / d + n))), int(min(255, max(0, b / d + n))))
soft = mask.filter(ImageFilter.GaussianBlur(1.6))
Image.composite(fill, im, soft).save(out, quality=95)
