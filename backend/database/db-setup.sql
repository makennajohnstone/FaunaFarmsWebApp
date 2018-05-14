drop database if exists faunafarms;
create database faunafarms;
use faunafarms;

create table Cuts(
   Id integer primary key,
   Name varchar(20),
   CutOn date,
   Weight float,
   Price float,
   Picture varchar(500)
);

insert into Cuts
  values (1, "Beef Tenderloin", STR_TO_DATE('5-01-2018', '%d-%m-%Y'), 5.0, 4.99,
          "https://lh3.googleusercontent.com/L7jxFeljkhE9iFtg31MFiUq36x3DO3-6GBz2KqIwUByyuy6fPEj0IwPxMsNKHweL0C2QsQOxcnRCapjcv2Jzbj5NzSfvYshYGo8AcRRjcDJ_rdA7rBABhHHLNLHDNmByLkg9SO9btg=w2400"),
         (2, "Beef", STR_TO_DATE('5-02-2018', '%d-%m-%Y'), 5.0, 11.99,
         "https://lh3.googleusercontent.com/XRfvMfN8I7RVd10u0bF2KfILs3pBR5OaHYyb5JiFNZf3Tlky_MtVjzbVFZPvbOzicHTd4NZM5Q6IQt9h7XTKQjgFC1QM0XEOjJ4jbu0-YFoNaNlf2W36MBkkXULIVwRZ1A24MfCqkg=w2400");
