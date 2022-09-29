#include<iostream>

using namespace std;
void calculater(){
    int n1,n2;
    char ch;
    again:
    cout<<"Choose operater :-"<<endl
        <<" '+' for Addition"<<endl
        <<" '-' for subtraction"<<endl
        <<" '*' for Multiplication"<<endl
        <<" '/' for Division"<<endl;
    cout<<"Example 2 + 3 <- dont forgot the space"<<endl;
    cin>>n1;
    cin>>ch;
    cin>>n2;
    switch(ch){
        case '+':cout<<" = "<<n1+n2<<endl;break;
        case '-':cout<<" = "<<n1-n2<<endl;break;
        case '*':cout<<" = "<<n1*n2<<endl;break;
        case '/':cout<<" = "<<(float)n1/n2<<endl;break;
        default: cout<<"wrong ❌ choose again"; goto again;
    }
    
}
int main(){
    char ch;
    calculater();
}