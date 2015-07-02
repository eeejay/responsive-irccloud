print 'const STYLE ='

stylelines = open('responsive-irccloud.css').readlines();
while stylelines:
  print '%s%s' % (repr(stylelines.pop(0)), ' +' if stylelines else ';')

print

print open('inject-responsive-stylesheet.js.in').read();