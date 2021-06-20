import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../util/util";
import { appendData } from "../../store/reducers/listStore/action";
import ListBox from "./ListBox";
import Header from "../common/header";
import Pagination from "../common/Pagination";
import style from "../../styles/list.module.scss";

const ListContainer = () => {
  const { data } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const isUnmounted = useRef(false);
  const [offset, setOffset] = useState(0);
  const [listSize, setListSize] = useState(5);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await getList();
      const { rates } = response;
      if (Object.keys(rates).length > 0 && !isUnmounted.current) {
        dispatch(appendData(rates));
      }
    } catch (err) {
      // setIsError(true);
    }
  };

  const setOffsetCallback = useCallback(
    (val) => {
      setOffset(val);
    },
    [setOffset]
  );

  const setListSizeCallback = useCallback(
    (val) => {
      setListSize(val);
    },
    [setListSize]
  );

  useEffect(() => {
    isUnmounted.current = false;
    fetchData();
    return () => {
      isUnmounted.current = ture;
    };
  }, []);

  if (data.length === 0) {
    return null;
  }

  return (
    <>
      <div className={style.list_container}>
        <Header />
        {(isError && <div>Service maintaining.</div>) || (
          <>
            <div className={style.list_wrapper}>
              <table
                className={`${style.list_table_wrapper} ${style.layout} ${style.content_font_size}`}
                data-testid="test-id"
              >
                {Object.keys(data)
                  .slice(offset * listSize, (offset + 1) * listSize)
                  .map((key, index) => {
                    const rateInfo = data[key];
                    return (
                      <React.Fragment key={index}>
                        {index === 0 && (
                          <tr>
                            <th>name</th>
                            <th>type</th>
                            <th>unit</th>
                            <th>value</th>
                          </tr>
                        )}
                        <ListBox {...rateInfo} />
                      </React.Fragment>
                    );
                  })}
              </table>
            </div>
            <Pagination
              pageSize={listSize}
              setCurrentPage={setOffsetCallback}
              currentPage={offset}
              setPageSize={setListSizeCallback}
              pageSizeList={[5, 10, 15]}
              totalCount={Object.keys(data).length}
            />
          </>
        )}
      </div>
    </>
  );
};

export default ListContainer;
