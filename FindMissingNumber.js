
// Javascript program to gather characters
// of a string in minimum cost

// Function to find the missing elements
function prletMissingElements(arr, N) {

    // Initialize diff
    let diff = arr[0] - 0;

    for (let i = 0; i < N; i++) {

        // Check if diff and arr[i]-i
        // both are equal or not
        if (arr[i] - i != diff) {

            // Loop for consecutive
            // missing elements
            while (diff < arr[i] - i) {
                document.write((i + diff) + " ");
                diff++;
            }
        }
    }
}

// Driver Code

// Given array arr[]
let arr = [1, 2, 3, 4, 6, 8, 10];
let N = arr.length;

// Function call
prletMissingElements(arr, N);
