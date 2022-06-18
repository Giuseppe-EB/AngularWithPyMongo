FROM python:3.11-rc-alpine

ENV db-name='myapp'

WORKDIR /home/server/

COPY . .

RUN apk upgrade && \
    pip install --upgrade pip && \
    pip install -r requirements.txt

RUN export db-name

EXPOSE 5000


#CMD ["python", "run-app.py"]
CMD [ "python3", "-u", "-m" , "flask", "run", "--host=0.0.0.0"]