def minDiff(arr,n,k): 
    result = +2147483647
   
    arr.sort() 
   
    for i in range(n-k+1): 
        result = int(min(result, arr[i+k-1] - arr[i])) 
   
    return result 
  
  
arr= [10, 100, 300, 200, 1000, 20, 30] 
n =len(arr) 
k = 3
   
print(minDiff(arr, n, k))