using namespace std;
#include<bits/stdc++.h>
string multiply(string &A, string& B) {
    vector<int> a;
    vector<int> b;
    for(int i=0;i<A.size();i++){
        a.push_back(A[i]-'0');
    }
    for(int i=0;i<B.size();i++){
        b.push_back(B[i]-'0');
    }
     
     int num1=0;
     int num2=0;
     int n=A.size();
     int m=B.size();
     for(int i=0;i<A.size();i++){
         num1+=a[i]*pow(10,n-1-i);
     }
      for(int i=0;i<B.size();i++){
         num2+=b[i]*pow(10,m-1-i);
     }
     long long val=num1*num2;
     string s="";
     while(val>0){
         int x=val%10;
         s.push_back(x+'0');
         val=val/10;
     }
     reverse(s.begin(),s.end());
     return s;
     
}
int main(){
    string A="12";
    string B="10";
    cout<<multiply(A,B);

}