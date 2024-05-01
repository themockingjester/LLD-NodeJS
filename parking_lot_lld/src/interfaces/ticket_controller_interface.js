class TicketControllerInterface {
  calculateTicketPrice(ticket, hrs) {}
  addTicket(ticket) {}
  generateTicket(vehicle, userId, parkingSpaceId, hrs, status) {}
  getTicket(ticketId){}
}
module.exports = {
  TicketControllerInterface,
};
