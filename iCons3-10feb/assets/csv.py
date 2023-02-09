import numpy as np
import math
import pandas as pd

ISNEdemand = pd.read_csv("code/Junior Year/iCons3/ISNE-demand.csv")
ISNEgenerate = pd.read_csv("code/Junior Year/iCons3/ISNE-generate.csv")

print(ISNEdemand.columns)
print("-----------------------------")
print(ISNEgenerate.columns)

newDemand = ISNEdemand[['Timestamp (Hour Ending)', 'Demand (MWh)']]
newGenerate = ISNEgenerate[["Timestamp (Hour Ending)", "Wind Generation (MWh)", "Solar Generation (MWh)", "Hydro Generation (MWh)"]]

print("/////////////////////")
print(newDemand.columns)
print("--------------------")
print(newGenerate.columns)

finalCSV = newDemand.set_index('Timestamp (Hour Ending)').join(newGenerate.set_index('Timestamp (Hour Ending)'))

print("------------")

finalCSV.to_csv('code/Junior Year/iCons3/combinedDemandGenerate.csv')
# newGenerate.to_csv('code/Junior Year/iCons3/ISNEgeneration.csv', index=False)