# Word-Composition-Problem

 <h2>Command to run the code</h2>
 node &#60;code_file_name&#62; &#60;path_to_input_file&#62;
 <br>
 eg: node WordCompositionProblem.js Input_02.txt
 <br>
 <b>NOTE: Node v8.0.0 or higher required</b>
    
 <h2>Overview</h2>
 <p>First, the code just reads the text data from the file of which it recieves the name as a command line argument. Then it makes a not of the current time for later use. In the next line there is actual function call (wordComposition) for solving the problem. This function just iterates over all the words in the input text and checks if it is a composed one or not. If it is a composed word then its push to an array which keeps track of the longest composed words found so far. Now, in each iteration another function is called (isComposed) to check if a word is composed or not. This isComposed function just recursively keeps splitting the word and checks for the part to be in dictionary or just another compsoed word.</p>
 
 <h2>Design decisions</h2>
    <p>One really important design desicion was to decide the appropriate data structure for performing the search operation on the word list. In my case I chose to use a HashMap for it's O(1) search time. I also did though about unsing binary search as making the HashMap has a O(n) time complexity. But I think its better to just O(n) once instead of doing O(log n) h times, where h is the height of the recursion tree (considering worst case).</p>
 
 <h2>Approach</h2>
 <p>After understanding the problem I figured out this much that other that reading the input file and iterating over the whole list, the real deal is going to be making a function that can tell if a word is composed or not.</p>
 <p>So my first approach to make that function was to just iterate over all the letters and keeping accumulating those letters until the accumulated word is in the dictionary. If it was in the dictionary then just reset the accumulation and put that word in an array for later use. After the intertion was over then I wouold simply check if the total length of all the accumulated words stored in that array is equal to the lenght of the original word. But this approach could not handle words like "cat" and "cats".</p>
 <p>So after a little thought my second approach was to split the word recursively and then checking if the first part was in the dictionary and making a recusive call on the second part to check if that part is composed or not. At first this approach also did not work as the word was actually contained in the dictionary causing the function to always return true. To solve this problem I just removed the current word from the dictionary and the re-add it after the function had returned.</p>
