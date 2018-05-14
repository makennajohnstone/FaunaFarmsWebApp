CREATE TABLE farmers(
   First VARCHAR(20),
   Last VARCHAR(40),
   PRIMARY KEY(First,Last)
);


CREATE TABLE AnimalsBought(
   Id INTEGER PRIMARY KEY,
   Price INTEGER,
   Weight INTEGER,
   Bought DATE,
   Dob DATE
);

CREATE TABLE AnimalTypes(
   Id INTEGER PRIMARY KEY,
   Type VARCHAR(10)
);

CREATE TABLE Cuts(
   Id INTEGER PRIMARY KEY,
   CutOn DATE,
   Weight FLOAT,
   Price FLOAT
);

CREATE TABLE CutTypes(
   Id INTEGER PRIMARY KEY,
   Name VARCHAR(20),
   Description VARCHAR(100)
);

CREATE TABLE Orders(
   Id INTEGER PRIMARY KEY,
   PurchaseDate DATE,
   CustomerId INTEGER
);

CREATE TABLE Customers(
   Id INTEGER PRIMARY KEY,
   Last VARCHAR(20),
   First VARCAHR(15)
);
