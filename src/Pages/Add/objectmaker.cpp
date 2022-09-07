#include<iostream>
using namespace std;
int main(){
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
    string s;
    while(getline(cin, s))
    {
        cout<<"{ value: \""<<s<<"\" , name: \""<<s<<"\"},"<<endl;
    }
    return 0;
}