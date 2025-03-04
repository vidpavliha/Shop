@echo off
mkdir online-shop
cd online-shop
mkdir static
mkdir static\images
mkdir templates
echo /* CSS file */ > static\styles.css
echo /* JavaScript file */ > static\script.js
echo "" > templates\index.html
echo from flask import Flask, render_template, request, jsonify > app.py
echo flask > requirements.txt
echo # Online Shop Project > README.md
echo Structure created successfully!
pause
