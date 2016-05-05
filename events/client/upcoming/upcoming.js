Template.allEvents.onCreated(function () {

  const instance = this;

  instance.events = new ReactiveVar();

  instance.subscribe("upcomingEvents");

  instance.autorun(() => {
    if (instance.subscriptionsReady()) {
      instance.events.set(Events.find().fetch());
    }
  })
})

Template.allEvents.helpers({
  events () {
    const instance = Template.instance();
    return instance.events.get();
  },
  fromNow (date) {

    return moment(date).fromNow();
  }
})