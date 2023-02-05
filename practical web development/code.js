module.exports = {
    answers: [
        `#include <iostream>
        using namespace std;
        int solveMeFirst(int arr[], int n) {
            int sum=0;
            for(int i=0;i<n;i++){
                sum += arr[i];
            }
            return sum;
        }
        int main() {
        int n,sum;
        cin>>n;
        int arr[n];
        for(int i=0;i<n;i++){
            cin>>arr[i];
        }
        sum = solveMeFirst(arr,n);
        cout<<sum;
        return 0;
        }`
    ]
}