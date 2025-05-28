import "../styles/components/ticket.scss"
export default function Ticket({film, date, seats, cinema, time}){

    return(
        <section className="ticket">
            <img className="ticket__img" src="/ticket.png" alt="" />
            <div className="ticket__textDiv">
            <div className="ticket__flexDiv">
                <h2 className="ticket__heading">{film}</h2> <p className="ticket__text ticket__text--red">e-ticket</p>
            </div>
            <div className="ticket__gridDiv">
                <p className="ticket__miniHeading">Date</p>
                <p className="ticket__miniHeading">Seats</p>
                <p className="ticket__text">{date}</p>
                <p className="ticket__text">{seats}</p>

            </div>
            <div className="ticket__gridDiv">
                <p className="ticket__miniHeading">Location</p>
                <p className="ticket__miniHeading">Time</p>
                <p className="ticket__text">{cinema}</p>
                <p className="ticket__text">{time}</p>

            </div>
            <div className="ticket__gridDiv">
                <p className="ticket__miniHeading">Payment</p>
                <p className="ticket__miniHeading">Order</p>
                <p className="ticket__text">successful</p>
                <p className="ticket__text">912912</p>

            </div>

            </div>
            <img className="ticket__barcode" src="/barcode.png" alt="" />
        </section>
    )
}