# This program will find all instances of accented characters in the words and change them into an unaccented version
# initialize all alphabet letters, and accented letters lists
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
words = []
de_accented = 0

def main(): 
    write_list_from_txt()
    check_list()


def write_list_from_txt():
    global alphabet
    global words
    counter = 0
    # open the fivers.txt file
    with open('fivers.txt', 'r') as file:
    # read through the file and search for words that aren't composed of entirely alphabet characters. 
        for word in file:
            print (word)
            counter = 0
            for letter in word:
                if letter not in alphabet:
                    print(letter)
                    word = word.replace(letter, (replace_char(letter)))
                    counter += 1
                else:
                    counter += 1 
            words.append(word)



# replaces the accented characters with their base letter
def replace_char(char):
    # initialize lists with the accented characters
    print("got here")
    global de_accented
    a = ['â', 'æ', 'á', 'à']
    e = ['é', 'è', 'ê','ë']
    i = ['ï', 'î']
    o = ['ô', 'œ', 'ō']
    u = ['û', 'ü']
    c = ['ç', 'č']
    n = ['ñ']
    if char in a:
        char = 'a'
    elif char in e:
        char = 'e'
    elif char in i:
        char = 'i'
    elif char in o:
        char = 'o'
    elif char in u:
        char = 'u'
    elif char in c:
        char = 'u'
    elif char in n:
        char = 'n'
    else:
        print("character not found")
    de_accented += 1
    return char

# this function checks the list for any characters that aren't in alphabet
def check_list():
    # empty the un_accented .txt file 
    f = open ("un_accented.txt", "w")
    f.write('')
    f.close()
    print("got here")
    global alphabet
    global words
    global de_accented
    for word in words:
        for letter in word:
            if letter not in alphabet:
                print("whoops")
                print(word)
        f = open("un_accented.txt", "a")
        f.write(word)
        f.close()
    print(f" {de_accented} accented letters removed")

main()