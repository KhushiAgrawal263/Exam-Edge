import React from 'react'
import { div, Card, makeStyles } from '@material-ui/core'


const useStyle = makeStyles({
    container: {
        margin: 100
    },
    h1: {
        marginLeft: 50
    },
    card: {
        margin: 50,
        padding: '20px 50px 20px 50px',
        boxShadow: '5px 10px 8px #888888',
        background: '#e4e7ed'
    },
    content: {
        fontSize: 18
    }
})

const Subjects = () => {
  const classes = useStyle();

  return (
    <div id='subjects' className={classes.container}>
        <h1 className={classes.h1}>Syllabus</h1>

        <Card className={classes.card}>
            <h2 className={classes.heading}>Operating System</h2>
            <p className={classes.content}>Processes, threads, inter‐process communication, concurrency, synchronization, 
                Deadlock, CPU scheduling, Memory management and virtual memory, File systems.</p>
        </Card>

        <Card className={classes.card}>
            <h2 className={classes.heading}>Computer Networks</h2>
            <p className={classes.content}>Concept of layering. LAN technologies (Ethernet). Flow and error control techniques, switching. 
            IPv4/IPv6, routers and routing algorithms (distance vector, link state). TCP/UDP and sockets, congestion control. 
            Application layer protocols (DNS, SMTP, POP, FTP, HTTP). Basics of Wi-Fi. Network security: 
            authentication, basics of public key and private key cryptography, digital signatures and certificates, firewalls.</p>
        </Card>

        <Card className={classes.card}>
            <h2 className={classes.heading}>Theory Of Computation</h2>
            <p className={classes.content}>Regular expressions and finite automata. Context-free grammars and push-down automata. Regular
             and context-free languages, pumping lemma. Turing machines and undecidability.</p>
        </Card>

        <Card className={classes.card}>
            <h2 className={classes.heading}>Database</h2>
            <p className={classes.content}>ER‐model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints,
             normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control.</p>
        </Card>

        <Card className={classes.card}>
            <h2 className={classes.heading}>Algorithms</h2>
            <p className={classes.content}>Searching, sorting, hashing. Asymptotic worst-case time and space complexity. Algorithm design techniques: 
            greedy, dynamic programming and divide‐and‐conquer Graph search, minimum spanning trees, shortest paths.</p>
        </Card>

    </div>
  )
}

export default Subjects