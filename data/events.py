from google.appengine.ext import ndb

#
# One row per event (one per night)
# 8, 9 or 10 ball only
#

class Event(ndb.Model):
    """Models a daily event."""
    date = ndb.DateProperty()
    game = ndb.IntegerProperty()
    