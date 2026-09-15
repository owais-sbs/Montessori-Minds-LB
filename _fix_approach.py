from pathlib import Path

p = Path(r"D:\Sufiyan\Montessori-Minds-LB\src\data\approach.js")
text = p.read_text(encoding="utf-8")

pairs = [
    (
        "image: images.gallery.activity1,\n    reverse: true,\n  },\n  {\n    id: 'sensory',",
        "image: images.gallery.activity2,\n    reverse: true,\n  },\n  {\n    id: 'sensory',",
    ),
    (
        "image: images.gallery.learning1,\n    reverse: false,\n  },\n  {\n    id: 'grace',",
        "image: images.gallery.sensoryTiles,\n    reverse: false,\n  },\n  {\n    id: 'grace',",
    ),
    (
        "image: images.gallery.activity2,\n    reverse: true,\n  },\n  {\n    id: 'nature',",
        "image: images.gallery.emotions,\n    reverse: true,\n  },\n  {\n    id: 'nature',",
    ),
    (
        "image: images.gallery.classroom2,\n    reverse: true,\n  },\n]",
        "image: images.approach,\n    reverse: true,\n  },\n]",
    ),
]

for old, new in pairs:
    if old not in text:
        raise SystemExit(f"Missing pattern:\n{old[:80]}")
    text = text.replace(old, new, 1)

p.write_text(text, encoding="utf-8")
print("approach.js updated")
