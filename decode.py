num =input()
num = num[::-1]
Final_string = '' 
number = '' 
for i in range(len(num)): 
    number = number + num[i] 
    if (int(number) >= 65 and int(number) <= 90) or (int(number) >= 97 and 
    int(number) <= 122) or (int(number) == 32): 
      character =chr(int(number)) 
      Final_string+=character 
      number = '' 
      print(Final_string)