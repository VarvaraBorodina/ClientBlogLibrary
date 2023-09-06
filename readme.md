# Client Blog Library

[Watch on Storybook](https://main--meek-bublanina-1598a7.netlify.app/)

### Instalation

```
npm i client-blog-library
```

### Component

```
<Author />
```

### Props

```
author: {
    id: number,
    name: string,
    lastName: string,
    description: string,
    photo: string
}
role: string
```

- **photo** url to author photo.

### Component

```
<Dropdown />
```

### Props

```
options: string[]
changeOption: (newString: string) => void
title: string
```

- **title** initial placeholder.

### Component

```
<Category />
```

### Props

```
category: {
    id: number;
    name: string;
    icon: string;
    description: string;
}
full: boolean
icon: JSX.Element
```

### Component

```
<CategoryPost />
```

### Props

```
category: string
post: {
    id: number;
    category: number;
    author: number;
    creationDate: {
        day: number;
        month: number;
        year: number;
    };
    title: string;
    description: string;
    content: string;
    image: string;
    tags: number[];
}
```

### Component

```
<Networks />
```

### Props

```
No props
```
