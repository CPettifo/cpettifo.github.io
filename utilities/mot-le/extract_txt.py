# This program extracts from a txt file and outputs all five-letter non-acronyms
def main():
    counter = 0
    line_counter = 0
    search = input("Search for 5-letter word: ")
    search_count = 0
    fivers = []
    search_list = []

    with open('dictionary.txt', 'r') as f:
        for line in f:
            if search in line:
                search_list.append(line)
                search_count += 1
            line = line.replace('se', '')
            line = line.replace('au', '')
            line = line.replace('.', '')
            line = line.strip()
            if len(line) == 5:
                counter += 1
                if line not in fivers:
                    fivers.append(line)
            line_counter += 1
        f.close()

    f = open("fivers.txt", "w")
    f.write("")
    f.close()

    exclusion_characters = ["1", " ", "/", "0", "5", "7", 'ˡ', 'ᵉ', 'ˢ']

    fiver_counter = 0
    for x in fivers:
        exclude_counter = 0
        for letter in x:
            if letter.isupper():
                exclude_counter += 1
            if letter.isalpha() or letter == '\n':
                exclude_counter += 0
            elif letter in exclusion_characters:
                exclude_counter += 1
            elif letter == 'ˡ':
                print (x)
                exclude_counter += 1
            else:
                exclude_counter += 1
        if exclude_counter == 0:
            f = open("fivers.txt", "a")
            f.write(x)
            f.write('\n')
            fiver_counter += 1
            f.close()

    print(f"{counter} 5-letter words found from {line_counter}")
    print(f"Your queried word was found this many times in the dictionary: {search_count}")
    pause = input(f"Instances of the word in the dictionary will be outputted below once you press enter")
    for x in search_list:
        print(x)
    print(f"{fiver_counter} words in fiver.txt now")
