from google.appengine.ext import ndb

#
# One row per match. Each match has two players, a winner and a loser.
#

import events
import players

class Match(ndb.Model):
    """Models a match between two players."""
    event = ndb.KeyProperty(kind=events.Event)
    matchNumber = ndb.IntegerProperty()   # 1 to 55 or whatever
    
    playerW = ndb.KeyProperty(kind=players.Player)
    playerL = ndb.KeyProperty(kind=players.Player)
    targetW = ndb.IntegerProperty()
    targetL = ndb.IntegerProperty()
