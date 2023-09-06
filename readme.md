# Client Blog Library

[Watch on Storybook](https://64c8df4f7dd4296775eac92e--wondrous-travesseiro-602d8e.netlify.app/?path=/story/calendar--base)

### Instalation

```
npm i calendar-with-todo-list
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
