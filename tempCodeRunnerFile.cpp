#include<bits/stdc++.h>
using namespace std;
int f(int i, vector<int> adj[],vector<int> &dp){
        int sum=0;
        if(dp[i]!=-1)return dp[i];
         for(auto it: adj[i]){

            if(adj[i].size()==0)return 0;
                sum+=f(it,adj,dp)+1;
         }
         return dp[i]= sum;
}
int main(){
    int n;
    cin>>n;
    vector<int> v(n);
    v[0]=-1;
    vector<int> adj[n+1];
    for(int i=1;i<n;i++){
        cin>>v[i];
        adj[v[i]].push_back(i+1);
    }
    vector<int> dp(n+1,-1);
    int x=f(1,adj,dp);
   for(int i=1;i<=n;i++){
        cout<<dp[i]<<" ";
   }


}