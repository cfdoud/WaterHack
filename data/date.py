import os

for file in os.listdir("."):
    if file.endswith(".csv"):
        f = open(file, "r")
        w = open("new/" + file, "w")

        dateDict = {
            "Jan": 1,
            "Feb": 2,
            "Mar": 3,
            "Apr": 4,
            "May": 5,
            "Jun": 6,
            "Jul": 7,
            "Aug": 8,
            "Sep": 9,
            "Oct": 10,
            "Nov": 11,
            "Dec": 12,
        }

        for i in f.readlines():

            info = i.split(",")

            date = info[0].split("-")

            if len(date) == 3:
                year = "20" + str(date[2])
                month = str(dateDict[date[1]])
                day = str(date[0])
                if len(month) < 2:
                    month = "0" + month
                if len(day) < 2:
                    day = "0" + day
                new_data = year + "-" + month + "-" + day

                for j in info[1:]:
                    new_data += "," + j
                w.write(new_data)
