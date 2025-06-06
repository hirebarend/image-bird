<h3 align="center">Image Bird</h3>

<p align="center">
    Empower developers with Image Bird's real-time URL-based API to create a host of transformations
from a single master image for high-quality, performant visual experiences at scale.
    <br />
    <br />
    <a href="#getting-started"><strong>Getting Started</strong></a> ·
    <a href="#deployment"><strong>Deployment</strong></a> ·
    <a href="#contributing"><strong>Contributing</strong></a> ·
    <a href="#license"><strong>License</strong></a>
</p>

<p align="center">
  <a href="https://github.com/hirebarend/image-bird/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/hirebarend/image-bird?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
</p>

<br/>

## Getting Started

```bash
git clone https://github.com/hirebarend/image-bird.git

cd image-bird

npm install

npm run dev

# Open your browser and go to, http://localhost:8080/
```

### Orginal Image

- URL: `https://images.unsplash.com/photo-1573225935973-40b81f6e39e6`
- Size: `2.36 MB`
- Dimensions: `4585 x 3057`
- Format: `jpeg`

![](/docs/images/photo-1573225935973-40b81f6e39e6.jpeg)

### Result

- URL: `http://localhost:8080/images.unsplash.com/format=webp,width=800/photo-1573225935973-40b81f6e39e6`
- Size: `40.1 KB`
- Dimensions: `800 x 533`
- Format: `webp`

![](/docs/images/photo-1573225935973-40b81f6e39e6.webp)

## Deployment

```bash
curl -L -O https://raw.githubusercontent.com/hirebarend/image-bird/refs/heads/main/docker-compose.yaml

nano docker-compose.yaml

# replace <PLACEHOLDER>

docker compose up -d
```

## 🤝 Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/hirebarend/image-bird/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/hirebarend/image-bird/pull) to add new features/make quality-of-life improvements/fix bugs.

<br />

<a href="https://github.com/hirebarend/lnkbrd/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hirebarend/lnkbrd" />
</a>

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/616bc192c7db2f2af8549094bc3a801da418e8a8.svg "Repobeats analytics image")

## License

Inspired by [Plausible](https://plausible.io/), Image Bird is open-source under the MIT License. You can [find it here](https://github.com/hirebarend/image-bird/blob/main/LICENSE).