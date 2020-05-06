python3 -m venv venv
source venv/bin/activate
call venv/scripts/activate

pip install -r requirements.txt

python manage.py makemigrations post

python manage.py migrate
