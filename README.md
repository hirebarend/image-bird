# Image Bird

Empower developers with Image Bird's real-time URL-based API to create a host of transformations
from a single master image for high-quality, performant visual experiences at scale.

## Features

- Format
- Resize

## Getting Started

Orginal URL: `https://images.unsplash.com/photo-1573225935973-40b81f6e39e6`

Image Bird URL: `https://imagebird.co/images.unsplash.com/photo-1573225935973-40b81f6e39e6`

**Optional Query Parameters**

- format: `jpeg | jpg | png | webp`
- resize
    - resize\[height\]: `Height`
    - resize\[width\]: `Width`

## Demo

### Orginal Image

- URL: `https://images.unsplash.com/photo-1573225935973-40b81f6e39e6`
- Size: `1.98 MB`
- Dimensions: `4585 x 3057`
- Format: `jpeg`

![](/docs/images/photo-1573225935973-40b81f6e39e6.jpeg)

### Result

- URL: `https://imagebird.co/images.unsplash.com/photo-1573225935973-40b81f6e39e6?format=webp&resize[fit]=inside&resize[height]=800&resize[width]=800`
- Size: `32.7 KB`
- Dimensions: `800 x 533`
- Format: `webp`

![](/docs/images/photo-1573225935973-40b81f6e39e6.webp)

## Installation

### Prerequisites

* Install `kubectl`
* Install `helm`

### Clone Repository

```bash
git clone https://github.com/hirebarend/kubetls.git

cd kubetls
```

### Configure `helm-charts/values.yaml`

```bash
nano helm-charts/values.yaml
```

* `HOST` 
* `MONGODB_CONNECTION_STRING`
* `MONGODB_DATABASE_NAME`

### Install `kubetls` using `helm`

```bash
helm install kubetls ./helm-charts
```

## 🤝 Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/hirebarend/fastify-boilerplate/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/hirebarend/fastify-boilerplate/pull) to add new features/make quality-of-life improvements/fix bugs.