    
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
from  collections import Counter
from pydantic import BaseModel
from sklearn import metrics

app = FastAPI()
   # "http://localhost:3000",
   #  "localhost:3000",
   #  "http://140.125.45.158:3000",
   #  "140.125.45.158:3000"
origins = [
 '*',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],


)


def find_Bayes_line(coin_count, toss_coin_count_list, times, rounds_list, landa_list):
    #coin_count 硬幣數量 ex: 3
    #toss_coin_count_list 每顆硬幣在0~100的柱子高度，size是[3, 101]
    #rounds_list 每顆硬幣的rounds ex: [4000, 6000, 8000]
    #landa_list 每顆硬幣的landa ex: [1, 2, 1]
    tmp = np.zeros_like(toss_coin_count_list,float)
    toss_coin_count_list = np.array(toss_coin_count_list)
    total_rounds = np.sum(rounds_list)
    last_coin = -1  #前一次最高硬幣
    current_coin = -1  #當前最高硬幣
    ans = []
    for i in range(times + 1):
        for j in range(coin_count):
            tmp[j][i] = landa_list[j]*toss_coin_count_list[j][i]/total_rounds
        if np.sum(tmp[:, i]) == 0:
            continue
        last_coin = current_coin
        current_coin = np.argmax(tmp[:, i], 0)
            
        if current_coin != last_coin and last_coin != -1:
            ans.append(i)    
    return ans

def calc_classification_rate(toss_coin1, toss_coin2, divide_value):
        #Coin1固定在左邊，Coin2固定在左邊
        #toss_coin1_count是第一顆硬幣丟0~100次正面分別有幾個回合的array
        #divide_value是分割線的值
        
        if toss_coin1.min() <= toss_coin2.min():
            toss_coin1_copy = toss_coin1.copy()
            toss_coin2_copy = toss_coin2.copy()
        else:
            toss_coin1_copy = toss_coin2.copy()
            toss_coin2_copy = toss_coin1.copy()
            
        #計算線左邊是Coin1的有幾個(tp)，線右邊是Coin2的有幾個(tn)
        toss_coin1_copy[toss_coin1_copy <= divide_value] = 1
        toss_coin1_copy[toss_coin1_copy > divide_value] = 0
        toss_coin2_copy[toss_coin2_copy < divide_value] = 0
        toss_coin2_copy[toss_coin2_copy >= divide_value] = 1  
        
        tp = np.sum(toss_coin1_copy)
        fn = len(toss_coin1_copy) - tp
        tn = np.sum(toss_coin2_copy)
        fp = len(toss_coin2_copy) - tn
        
        tpr = tp/(tp + fn)
        fpr = fp/(fp + tn)
        
        acc = (tp + tn) / (tp + fn + tn + fp)
        auc = metrics.auc([0, fpr, 1], [0, tpr, 1])
        
        return [int(tp),int(fn), int(tn), int(fp), round(float(tpr),3), round(float(fpr),3), round(float(acc),3),round(float(auc),3)]  

@app.get("/")
def read_root():
    return {"Hello": "World"}

class Item(BaseModel):
    n1: int = None
    l1: float = None
    t1: float = None
    n2: int = None
    l2: float = None
    t2: float = None
    n3: int = None
    l3: float = None
    t3: float = None
    n4: int = None
    l4: float = None
    t4: float = None
    d : int = None
    

@app.post('/h1')
async  def fun (item : Item):

  

    k_list = []
    height1 = []
    height2 = []
    height3 = []
    height4 = []
    all_height = []

    head_list_1 = [Counter(np.random.choice([1,0],size = item.d,p = [item.t1, 1-item.t1]))[1] for i in range(item.n1)]
    head_list_2 = [Counter(np.random.choice([1,0],size = item.d,p = [item.t2, 1-item.t2]))[1] for i in range(item.n2)]
    head_list_3 = [Counter(np.random.choice([1,0],size = item.d,p = [item.t3, 1-item.t3]))[1] for i in range(item.n3)]
    head_list_4 = [Counter(np.random.choice([1,0],size = item.d,p = [item.t4, 1-item.t4]))[1] for i in range(item.n4)]

    
    for i in range(item.d+1):
        height1.append(head_list_1.count(i))
        height2.append(head_list_2.count(i))
        height3.append(head_list_3.count(i))
        height4.append(head_list_4.count(i))
        k_list.append(i)
    

    
    post_input = {'1' : item.t1 ,'2' : item.t2 ,'3' : item.t3 ,'4' : item.t4}
    post_input = sorted(post_input.items(), key=lambda x:x[1])
    n = [eval('item.n'+post_input[0][0]),eval('item.n'+post_input[1][0]),eval('item.n'+post_input[2][0]),eval('item.n'+post_input[3][0])]
    l = [eval('item.l'+post_input[0][0]),eval('item.l'+post_input[1][0]),eval('item.l'+post_input[2][0]),eval('item.l'+post_input[3][0])]
    all_height.append(eval('height'+post_input[0][0]))
    all_height.append(eval('height'+post_input[1][0]))
    all_height.append(eval('height'+post_input[2][0]))
    all_height.append(eval('height'+post_input[3][0]))
    bayes=[]
    
    bayes.append(round(np.mean(find_Bayes_line(2,all_height[0:2],item.d,n[0:2],l[0:2]))))
    bayes.append(round(np.mean(find_Bayes_line(2,all_height[1:3],item.d,n[1:3],l[1:3]))))
    bayes.append(round(np.mean(find_Bayes_line(2,all_height[2:],item.d,n[2:],l[2:]))))

    cla1 = calc_classification_rate(np.array(eval('head_list_'+post_input[0][0])),np.array(eval('head_list_'+post_input[1][0])),bayes[0])
    cla2 = calc_classification_rate(np.array(eval('head_list_'+post_input[1][0])),np.array(eval('head_list_'+post_input[2][0])),bayes[1])
    cla3 = calc_classification_rate(np.array(eval('head_list_'+post_input[2][0])),np.array(eval('head_list_'+post_input[3][0])),bayes[2])

    
    
    json = {}
    json['keys'] = k_list
    json['values_1'] = height1
    json['values_2'] = height2
    json['values_3'] = height3
    json['values_4'] = height4
    json['bayes'] = bayes
    json['cla1'] = cla1
    json['cla2'] = cla2
    json['cla3'] = cla3

    return json




