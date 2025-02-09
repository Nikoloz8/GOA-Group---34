# https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python

def domain_name(url):
    url = url.replace("http://", "").replace("https://", "").replace("www.", "")
    return url.split(".")[0]
