import urllib.request, json, itertools

SHEET_URL = "https://script.google.com/macros/s/AKfycbzkYmeYJ-b4yaK5eH7xm3kUWCgc7lmBefBJfwuL5kZTTB4EtJ3YvSKCW7auABUOmMY1Gg/exec?path=Sheet1&action=read"

entries = {}
with urllib.request.urlopen(SHEET_URL) as url:
  data = json.load(url)
  for i, entry in enumerate(data['data']):
    if entry['Timestamp'] and entry['Upload your code!'] and entry['Email Address']:
      tag = entry['Email Address'].split('@')[0]
      code = entry['Upload your code!']
      entries[i] = {
        'tag': tag,
        'code': code,
        'matchups': 0,
        'wins': 0
      }

for a, b in itertools.combinations(entries, 2):
  a_points = 0
  b_points = 0
  a_plays = []
  b_plays = []
  for i in range(0, 100):
    try:
      main = 0
      exec(entries[a]['code'])
      a_play = main(a_plays, b_plays)
      Y = "we good"
      N = "throwing hands"
      assert a_play == Y or a_play == N
    except Exception as e:
      print(e)
      print(a, 'is disqualified')
      break
    try:
      main = 0
      exec(entries[b]['code'])
      b_play = main(b_plays, a_plays)
      Y = "we good"
      N = "throwing hands"
      assert b_play == Y or b_play == N
    except Exception as e:
      print(e)
      print(b, 'is disqualified')
      break
    a_plays.append(a_play)
    b_plays.append(b_play)
    if a_play == Y and b_play == Y:
      b_points += 1
      a_points += 1
    elif a_play == Y and b_play == N:
      b_points += 2
    elif a_play == N and b_play == Y:
      a_points += 2
  if a_points >= b_points:
    entries[a]['wins'] += 1
  if a_points <= b_points:
    entries[b]['wins'] += 1
  entries[a]['matchups'] += 1
  entries[b]['matchups'] += 1

for i, entry in entries.items():
  print(i, f"Wins {entry['wins']}/{entry['matchups']} matchups")