python3 -m venv venv
source venv/bin/activate

pip install -r requirements.txt

python manage.py makemigrations post

python manage.py migrate