def isInt(s):
    try: 
        int(s)
        return True
    except ValueError:
        return False


channel_output_file = "test.txt"
channel_values = open(channel_output_file).read().split()
str = []
i = 0
a = -1
while (i< len(channel_values) ):
	if  ( i%6 != 0 ):
		str[a].append(  channel_values[i] )
                #print "LLES"
	else:
		b = []
		b.append( channel_values[i] )
		#str.append( channel_values[i] )
                str.append( b )
                a+= 1;
		#print "hi"
	i+= 1
#print str
i = 0
while (i< len(str) ):
	print (str[i]),
	print ","
	i += 1
