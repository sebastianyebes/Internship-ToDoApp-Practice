# TodoApp with NextJS - Plasmic - Django :sparkles:

A user-friendly task management application that helps users organize and prioritize their daily activities.

# Project Instructions

## Backend - Django
1. Move directory (from root directory)
``` bash
  cd backend-api
```

2. Create a virtual environment
``` bash
  python -m venv venv
```

3. Activate a virtual environment
``` bash
  source venv/bin/activate
```

4. Install dependencies
``` bash
  pip install -r requirements.txt
```

5. Create an .env file for environment variables
``` env
example:
  DJANGO_ALLOWED_HOSTS = localhost 127.0.0.1 [::1]
  DB_NAME = todo
  DB_USER = carl_admin
  DB_PASS = pass
  DB_HOST = localhost
  DB_PORT = 5432
```

6. Run
``` bash
  python3 manage.py runserver / python manage.py runserver
```

## Frontend - NextJS & Plasmic
1. Move directory (from root directory)
``` bash
  cd ui
```

2. Install dependencies
``` bash
  npm install
```

3. Run
``` bash
  npm run dev
```

## Docker 

1. Move directory (from root directory)
``` bash
  cd backend-api
```

2. Modify DB_HOST .env file to db
``` env
  DB_HOST = db
```

3. Move to root directory
``` bash
  cd ..
```

4. From the root directory, run:
``` bash
  docker compose up -d --build
```
