<table className={style.table}>
        <thead>
          <tr>
            <th style={{ display: "flex" }}>
              ASSIGNED AGENT NAME <TiArrowUnsorted />
            </th>
            <th>
              AGENT ID
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL ID
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL LOCATION
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL SERIAL NUMBER
              <TiArrowUnsorted />
            </th>
            <th>
              TERMINAL MANUFACTURER
              <TiArrowUnsorted />
            </th>
            <th>
              TRANSACTION LIMIT
              <TiArrowUnsorted />
            </th>
            <th>
              PROFILE
              <TiArrowUnsorted />
            </th>
            <th>
              STATUS
              <TiArrowUnsorted />
            </th>
          </tr>
        </thead>
        {myterminals &&
          myterminals
            ?.filter((m) => {
              if (!search?.length) return m;
              else if (
                Object.values(m).some((value) =>
                  value?.toString()?.toLowerCase()?.includes(search)
                )
              ) {
                return m;
              }
            })
            .map((m) => {
              return (
                <>
                  <tr key={m?.id}>
                    <td>{m?.assigned_agent_name}</td>
                    <td>{m?.Agent_id}</td>
                    <td>{m?.Terminal_id}</td>
                    <td>{m?.Terminal_location}</td>
                    <td>{m?.Terminal_serial_number}</td>
                    <td>{m?.Terminal_manufacturer}</td>
                    <td>{m?.Transaction_limit}</td>
                    <td>{m?.Profile}</td>
                    <td>{m?.status}</td>
                  </tr>
                </>
              );
            })}
      </table>